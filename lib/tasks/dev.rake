namespace :dev do
  desc "Start development (include Angular build and Rails server)"
  task start: :environment do
    stop_rails_server_and_angular_build
    puts "Start Angular build..."
    angular_pid = spawn "cd angular/ && ng build -dop false -aot -sm false -w"

    puts "Start Rails server..."
    begin
      system "rails server"
    rescue SystemExit, Interrupt
      stop_rails_server_and_angular_build
    end

    Process.detach angular_pid
  end

  desc "Stop development (kill Angular build process and stop Rails server)"
  task stop: :environment do
    stop_rails_server_and_angular_build
  end
end

def stop_rails_server_and_angular_build
  rails_server_pid = File.read Rails.root.join("tmp", "pids", "server.pid") rescue nil
  angular_build_pids = `ps ax | grep -w '[n]g' | awk '{print $1}'`.split("\n")
    .join(" ")

  puts "Stop Rails server..."
  system "kill -9 #{rails_server_pid}"
  puts "Stop Angular build process..."
  system "kill -9 #{angular_build_pids}"
end
